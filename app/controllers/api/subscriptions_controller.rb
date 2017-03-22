class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.create(subscriptions_params)
    if @subscription.save
      @collection = @subscription.collection
      render 'api/collections/show'

    else
      render json: ['Was unable to subscribe.'], status: 401
    end
  end

  def destroy

  end

  private

  def subscription_params
    params.require(:subscription).permit(:collection_id, :feed_id)
  end
end
