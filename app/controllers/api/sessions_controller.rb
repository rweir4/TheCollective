class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def demoLogin
    @user = User.first
    login(@user)


    render 'api/users/show'
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ['You are not logged in'], status: 404
    end
  end
end
