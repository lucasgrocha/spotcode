class Song < ApplicationRecord
  belongs_to :album

  valdates :title, presence :true
  has_one_attached :file 
end
