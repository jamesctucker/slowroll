class ApplicationController < ActionController::API
    respond_to :json
    
    rescue_from Exception, with: :render_error
    # before_action :configure_permitted_parameters, if: :devise_controller?

    private

    # def configure_permitted_parameters
    #     attributes = [:firstname, :lastname, :email, :password, :avatar]
    #     devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
    #     # devise_parameter_sanitizer.permit(:account_update, keys: attributes)
    # end

    def render_error(e)
        if e.class.name == "ActiveRecord::RecordNotFound"
          render json: {success: false, error: "Not found"}.to_json, status: 404
        else
          p 'this is the error'
          p e
          render json: {success: false, error: "Internal server error"}.to_json, status: 500
        end
    end
end
