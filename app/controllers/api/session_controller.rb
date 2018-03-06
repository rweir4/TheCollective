class Api::SessionController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      render 'api/user'
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/session/new'
    else
      render json: ['You are not logged in'], status: 404
    end
  end
end
