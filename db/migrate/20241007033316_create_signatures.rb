class CreateSignatures < ActiveRecord::Migration[7.0]
  def change
    create_table :signatures do |t|

      t.timestamps
    end
  end
end
