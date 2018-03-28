class Api::FollowsController < ApplicationController
  def new
  end

  def create
    @follow = current_user.out_follows.new(followee_id: params[:user_id])

    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    render "api/follows/show"
  end
end
