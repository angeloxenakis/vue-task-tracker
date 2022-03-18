class CreateTaskItems < ActiveRecord::Migration[6.1]
  def change
    create_table :task_items do |t|
      t.string :name
      t.string :priority
      t.boolean :completed
      t.date :due_date

      t.timestamps
    end
  end
end
