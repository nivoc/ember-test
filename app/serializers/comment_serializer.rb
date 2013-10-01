class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :post_id
end
