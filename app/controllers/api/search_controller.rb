class Api::SearchesController < ApplicationController
  def query
    @results = Search.filter(query)
    render :search   
  end

  private
  def search_params
    params.require(:search).permit(:query)
  end
end
