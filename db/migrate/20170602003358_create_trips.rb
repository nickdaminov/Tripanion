class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :location
      t.string :time
      t.string :travel
      t.text :description

      t.timestamps
    end
  end
end
