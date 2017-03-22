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
    @subscription = CollectionFeed.where(collection_id: params[:collection_feed][:collection_id]).where(feed_id: params[:collection_feed][:feed_id]).first

    if @subscription.destroy
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
