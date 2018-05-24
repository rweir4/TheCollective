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

  def profile
    items = Item.all
    @items = items.select{ |item| item.author.id == params[:id] }
    render :profile
  end

  def show
    string = false;
    params[:id].chars.each do |letter|
      if ("a".."z").include?(letter)
        string = true;
      end
    end

    if string
      @item = Item.find_by(description: params[:id])
    else
      @item = Item.find(params[:id])
    end

    render :show
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
