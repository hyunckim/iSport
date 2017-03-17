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

    if @feed.save
      render "api/feeds/show"

    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:url, :title, :description, :image)
  end
end
