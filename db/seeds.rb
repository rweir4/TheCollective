# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Collection.destroy_all
Item.destroy_all


User.create!([
  { email: 'rweir11', image: Faker::Avatar.image, password: 'starwars11'},
  { email: 'rweir12', image: Faker::Avatar.image, password: 'starwars12'},
  { email: 'rweir13', image: Faker::Avatar.image, password: 'starwars13'}])

User.all.each do |user|
  5.times do
    Collection.create!({ title: Faker::LordOfTheRings.unique.location, author_id: user.id})
  end
end

Collection.all.each do |collection|
  Item.create!({ description: Faker::DrWho.quote, image: File.open("app/assets/images/baby-groot-fan-art-4k.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::HarryPotter.book, image: File.open("app/assets/images/harry-potter.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::VForVendetta.speech, image: File.open("app/assets/images/tall-art.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::HarryPotter.character, image: File.open("app/assets/images/hp-glasses.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::Lovecraft.tome, image: File.open("app/assets/images/john-green-quote.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::StarWars.call_sign, image: File.open("app/assets/images/keyboard-star-wars.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::HarryPotter.location, image: File.open("app/assets/images/GryffindorCommonRoomWallpaper.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::StarWars.character, image: File.open("app/assets/images/poster-star-wars.jpg"), collection_id: collection.id})
  Item.create!({ description: Faker::HarryPotter.quote, image: File.open("app/assets/images/deathly-hallows.jpg"), collection_id: collection.id})
end

# RUN AFTER SEED IN RAILS CONSOLE
# Item.all.each do |item|
#   item.image = File.open("app/assets/images/#{item.image}")
#   item.save!
# end
