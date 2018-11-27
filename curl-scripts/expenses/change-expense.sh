curl --include --request PATCH "http://localhost:4741/expenses/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "expense": {
      "source": "'"${SOURCE}"'",
      "amount": "'"${AMOUNT}"'",
      "category": "'"${CATEGORY}"'",
      "description": "'"${DESCRIPTION}"'"
      }
  }'
