json.token @token

json.user do
    json.(current_user, :id, :email)
end
