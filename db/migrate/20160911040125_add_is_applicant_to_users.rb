class AddIsApplicantToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :is_applicant, :boolean, default: false # Default is HR manager
  end
end
