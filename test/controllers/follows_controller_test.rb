require 'test_helper'

class FollowsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get follows_new_url
    assert_response :success
  end

  test "should get create" do
    get follows_create_url
    assert_response :success
  end

  test "should get destroy" do
    get follows_destroy_url
    assert_response :success
  end

end
