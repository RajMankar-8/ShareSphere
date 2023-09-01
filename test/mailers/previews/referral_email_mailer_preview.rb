# Preview all emails at http://localhost:3000/rails/mailers/referral_email_mailer
class ReferralEmailMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/referral_email_mailer/welcome_email
  def welcome_email
    ReferralEmailMailer.welcome_email
  end

end
