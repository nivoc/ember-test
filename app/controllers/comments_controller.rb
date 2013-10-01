class CommentsController < ApplicationController
  respond_to :json

  def index
    respond_with Comment.where(post_id: params[:post_id])
  end

  def show
    respond_with Comment.find(params[:id])
  end

  def create
    respond_with Comment.create(params[:comment])
  end

  def update
    respond_with Comment.update(params[:id], params[:comment])
  end

  def destroy
    respond_with Comment.destroy(params[:id])
  end
end
