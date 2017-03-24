class Api::SportsController < ApplicationController
  def index
    @sports = Sport.all
    render :index
  end

  def show
    @sport = Sport.find(params[:id])
    render :show
  end
end
