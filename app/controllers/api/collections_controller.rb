class Api::CollectionsController < ApplicationController
  def show
    @collection = Collection.find(params[:id])
    render :show
  end

  def index
    @collections = Collection.where("user_id = ?", current_user.id)
    render :index
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user = current_user
    if @collection.save
      @subscription = Subscription.create(collection_id: @collection.id, feed_id: params[:collection][:feed_id])
      render :show
    else
      render json: @collection.error.full_messages, status: 422;
    end
  end

  def update
    @collection = Collection.find(params[:id])
  end

  def destroy

  end

  private

  def collection_params
    params.require(:collection).permit(:title)
  end
end
