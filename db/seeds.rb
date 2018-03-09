# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Collection.destroy_all
Item.destroy_all

u1 = User.create!({ email: 'rweir11', password: 'starwars11'})
u2 = User.create!({ email: 'rweir12', password: 'starwars12'})
u3 = User.create!({ email: 'rweir13', password: 'starwars13'})

c1 = Collection.create!({ title: 'ron swanson', author_id: u1.id})

Item.create!([
    { description: 'thethingis', collection_id: c1.id},
    { description: 'thethingisnot', collection_id: c1.id},
    { description: 'thethingisthat', collection_id: c1.id},
    { description: 'thethingisthis', collection_id: c1.id},
    { description: 'BABY GROOT IS SO CUTE', collection_id: c1.id},
    { description: '1thethingis', collection_id: c1.id},
    { description: '1thethingisnot', collection_id: c1.id},
    { description: '1thethingisthat', collection_id: c1.id},
    { description: '1thethingisthis', collection_id: c1.id},
    { description: '1BABY GROOT IS SO CUTE', collection_id: c1.id},
    { description: '2thethingis', collection_id: c1.id},
    { description: '2thethingisnot', collection_id: c1.id},
    { description: '2thethingisthat', collection_id: c1.id},
    { description: '2thethingisthis', collection_id: c1.id},
    { description: '2BABY GROOT IS SO CUTE', collection_id: c1.id},
    { description: '3thethingis', collection_id: c1.id},
    { description: '3thethingisnot', collection_id: c1.id},
    { description: '3thethingisthat', collection_id: c1.id},
    { description: '3thethingisthis', collection_id: c1.id},
    { description: '3BABY GROOT IS SO CUTE', collection_id: c1.id}
  ])
