class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.create(subscription_params)
    if @subscription.save
      @collection = @subscription.collection
      render 'api/collections/show'

    else
      render json: ['Was unable to subscribe.'], status: 401
    end
  end

  def destroy
    @subscription = Subscription.where(collection_id: params[:subscription][:collection_id]).where(feed_id: params[:subscription][:feed_id]).first
    if @subscription.destroy
      @collection = Collection.find((params[:subscription][:collection_id]))
      render 'api/collections/show'
    else
      render json: ['Unable to unsubscribe'], status: 401
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:collection_id, :feed_id)
  end
end
