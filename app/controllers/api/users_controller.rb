class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
  end

  def show
    @user = User.find_by(params[:id])
    render :json
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
