class SettingsController < ApplicationController
  
  def edit
  end

  def update
    @setting = Setting.find_or_create_by(admin_id: current_admin.id)
    @setting.update(
      auto_text: params[:auto_text]
    )
    flash[:success] = "Setting saved!"
    redirect_to "/"
  end 
  
end
