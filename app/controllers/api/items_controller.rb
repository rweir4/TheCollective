class Api::ItemsController < ApplicationController
  def new
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def edit
    @item = current_user.items.find(params[:id])
  end

  def update

    @item = current_user.items.find(params[:id])
    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def index
    @follows = current_user.followees
  end

  def show
    @item = Item.find(params[:id])
  end

  def destroy

    @item = current_user.items.find(params[:id])
    @item.destroy
    # @items = Item.all
    # @follows = current_user.followees
    
    render :show
  end

  private
  def item_params
    params.require(:item).permit(:description, :image, :collection_id)
  end
end
