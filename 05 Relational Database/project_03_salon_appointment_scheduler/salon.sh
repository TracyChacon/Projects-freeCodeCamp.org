#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=salon --no-align --tuples-only -c"

echo -e "\n~~~~~ Salon Approintment Scheduler ~~~~~\n"

MAIN_MENU() {
    if [[ $1 ]]; then
        echo -e "\n$1"
    fi

    echo -e "\n1) cut\n2) color\n3) perm\n4) style\n5) trim"

    read SERVICE_ID_SELECTED

    case $SERVICE_ID_SELECTED in
        1) APPOINTMENT_MENU "cut" 1;;
        2) APPOINTMENT_MENU "color" 2;;
        3) APPOINTMENT_MENU "perm" 3;;
        4) APPOINTMENT_MENU "sytle" 4;;
        5) APPOINTMENT_MENU "trim" 5;;
        *) MAIN_MENU "I could not find that service. What would you like today?" ;;
    esac
}

APPOINTMENT_MENU () {
    echo -e "What's your phone number?"

    read CUSTOMER_PHONE

    CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$CUSTOMER_PHONE'")

    if [[ -z $CUSTOMER_NAME ]]; then
      echo -e "\nI don't have a record for that phone number, what's your name?"
      read CUSTOMER_NAME

      INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) values('$CUSTOMER_NAME', '$CUSTOMER_PHONE')")
    fi

    echo -e "\nWhat time would you like your $1, $CUSTOMER_NAME?"
    
    read SERVICE_TIME

    SERVICE_ID_SELECTED=$2

    CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")

    INSERT_APPOINTMENT_RESULT=$($PSQL "INSERT INTO appointments(customer_id, service_id, time) VALUES($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME' )")

    echo -e "\nI have put you down for a $1 at $SERVICE_TIME, $CUSTOMER_NAME."

}

MAIN_MENU
