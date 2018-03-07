class Api::UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = User.find(current_user.id)

    if @user.save
      login(@user)
      render 'api/users'
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  def index
    @users = User.all
  end

  def show
    # @user = User.find(params[:id])
    @user = current_user
  end

  def destroy
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
