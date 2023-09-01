class AddAttrToReferrals < ActiveRecord::Migration[7.0]
  def change
    add_column :referrals, :subject, :string
    add_column :referrals, :description, :text
  end
end
