class Api::UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :destroy]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      @follow = Follow.create(follower_id: @user.id, followee_id: User.first.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = User.find(current_user.id)

    if @user.update(user_params)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    string = false;
    params[:id].chars.each do |letter|
      if ("a".."z").include?(letter)
        string = true;
      end
    end

    if string
      @user = User.find_by(email: params[:id])
    else
      @user = User.find(params[:id])
    end
  end

  def destroy
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :image)
  end
end
