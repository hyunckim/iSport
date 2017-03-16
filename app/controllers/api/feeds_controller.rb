class Api::FeedsController < ApplicationController
  def show
    @feed = Feed.find_by(params[:id])
    render :show
  end

  def index
    @feeds = Feed.all
    render :index
  end

  def create
    @feed = Feed.new(feed_params)
  end

  private

  def feed_params
    params.require(:feed).permit(:url, :title, :description)
  end
end
