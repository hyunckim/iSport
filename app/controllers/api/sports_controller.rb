class Api::SportsController < ApplicationController
  def index
    @sports = Sport.all
    render :index
  end

  def show
    @sport = Sport.find(params[:id])
    @feeds = @sport.feeds
    render 'api/feeds/index'
  end
end
