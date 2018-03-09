class Api::ItemsController < ApplicationController
  def new
  end

  def create
    @item = Item.new(item_params)
    @item.collection_id = current_user.collections.find(params[:id])

    if @item.save
      render :show
    else
      render json: { errors: @item.errors.full_messages }
    end
  end

  def edit
    @item = current_user.items.find(params[:id])
  end

  def update
    @item = current_user.items.find(params[:id])
    debugger
    if @item.update(item_params)
      render :show
    else
      render json: { errors: @item.errors.full_messages }
    end
  end

  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def destroy
    @item = current_user.items.find(params[:id])
    @item.destroy
    @items = Item.all
    render :index
  end

  private
  def item_params
    params.require(:item).permit(:description, :image, :collection_id)
  end
end
