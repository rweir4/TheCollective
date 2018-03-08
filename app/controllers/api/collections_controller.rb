class Api::CollectionsController < ApplicationController
  def new
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.author_id = current_user.id

    if @collection.save
      render :show
    else
      render json: { errors: @collection.errors.full_messages }
    end
  end

  def edit
    @collection = current_user.collections.find(params[:id])
  end

  def update
    @collection = current_user.collections.find(params[:id])

    if @collection.update(collection_params)
      render :show
    else
      render json: { errors: @collection.errors.full_messages }
    end
  end

  def index
    @collections = Collection.all
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def destroy
    @collection = current_user.collections.find(params[:id])
    @collection.destroy
    @collections = Collection.all
    render :index
  end

  private
  def collection_params
    params.require(:collection).permit(:title)
  end
end
