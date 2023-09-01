class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, options = {})
    if resource.valid?
      render json: {
        status: {
          code: 200,
          message: "User signed in successfully",
          data: current_user
        }
      }, status: :ok
    else
      render json: {
        status: {
          code: 400,
          message: "Invalid email or password",
          errors: resource.errors
        }
      }, status: :bad_request
    end
  end

  def respond_to_on_destroy
    jwt_token = request.headers['Authorization'].split(' ')[1]
    jwt_payload = JWT.decode(jwt_token, Rails.application.credentials.fetch(:secret_key_base)).first

    current_user = User.find(jwt_payload['sub'])
    if current_user
      render json: {
        status: 200,
        message: "Signed out successfully"
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "User has no active session"
      }, status: :unauthorized
    end
  end
end
