from flask import Blueprint, jsonify
from cashfree_pg.models.create_order_request import CreateOrderRequest
from cashfree_pg.api_client import Cashfree
from cashfree_pg.models.customer_details import CustomerDetails
from cashfree_pg.models.order_meta import OrderMeta
from dotenv import load_dotenv
import random
import os
load_dotenv(override=True)

Cashfree.XClientId = os.getenv("CASHFREE_APP_ID")
Cashfree.XClientSecret = os.getenv("CASHFREE_SECRET_KEY")
Cashfree.XEnvironment = Cashfree.PRODUCTION
x_api_version = "2023-08-01"
joinus_routes = Blueprint('joinus_routes', __name__)

@joinus_routes.route('/joinus/create_order', methods=['POST','GET'])
def api_joinus_create_order():


    customerDetails = CustomerDetails(customer_id="ak1hhdtddsf0dd"+str(random.randint(100,12000)), customer_phone="6200050435")

    createOrderRequest = CreateOrderRequest(order_id="o278"+str(random.randint(100,12000)), order_amount=1.00, order_currency="INR", customer_details=customerDetails)

    orderMeta = OrderMeta()
    orderMeta.return_url = "https://render-deployement-test.vercel.app/joinus?order_id={order_id}"
    createOrderRequest.order_meta = orderMeta

    try:
        api_response = Cashfree().PGCreateOrder(x_api_version, createOrderRequest, None, None)
        return jsonify({"payment_session_id": api_response.data.payment_session_id}), 200
    except Exception as e:
        #sheets api code here to add the form data to the joinussheet
        return jsonify({"error": str(e)}), 500

#rsponse will be same as contact form