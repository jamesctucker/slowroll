class PostsController < ApplicationController
    before_action :authenticate_user!

    def show
        @post = Post.find(params[:id])
        render json: @post
    end
end
