class Api::SearchesController < ApplicationController
  def query
    @results = Search.filter(params["query"])
    render 'api/searches/search'
  end

  private
  def search_params
    params.require(:search).permit(:query)
  end
end
