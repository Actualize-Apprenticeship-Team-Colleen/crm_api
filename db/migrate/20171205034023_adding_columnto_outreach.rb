class AddingColumntoOutreach < ActiveRecord::Migration[5.0]
  def change
    add_column :outreaches, :leads_id, :integer
  end
end
