FactoryGirl.define do
  factory :post do
    title 'A title of the post'
    link 'https://github.com'
    body 'A GitHub link.'
    upvotes 0
    association :user, factory: :user
  end
end
