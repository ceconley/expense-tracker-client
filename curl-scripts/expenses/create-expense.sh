curl --include --request POST "http://localhost:4741/expenses/" \
  --header "Content-Type: application/json" \
  --data '{
      "expense": {
        "source": "'"${SOURCE}"'",
        "amount": "'"${AMOUNT}"'",
        "category": "'"${CATEGORY}"'",
        "description": "'"${DESCRIPTION}"'"
      }
  }'
