# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!([
    { email: 'rweir11', password: 'starwars11'},
    { email: 'rweir12', password: 'starwars12'},
    { email: 'rweir13', password: 'starwars13'}
  ])

Collection.create!([
    { title: 'ron swanson', author_id: 1}
  ])

Item.create!([
    { description: 'thethingis', img_url: 'https://i.pinimg.com/originals/3e/28/76/3e28760d268cecc15bd0b5ada6b10198.jpg', collection_id: 1},
    { description: 'thethingisnot', img_url: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/ron-swanson-memes/large/memes-rs-5-course-dinner.jpg?1384968217', collection_id: 1},
    { description: 'thethingisthat', img_url: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/ron-swanson-memes/large/8eb3d7370566b862f0d6c4a8d5fab5d542c75a15b4c216064f060b8a20fa.jpg?1384968217', collection_id: 1},
    { description: 'thethingisthis', img_url: 'https://i.pinimg.com/originals/f2/75/56/f275560300760d8ea4be3f2d1f80bcf4.jpg', collection_id: 1}
  ])
