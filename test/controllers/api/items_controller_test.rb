require 'test_helper'

class Api::ItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_items_new_url
    assert_response :success
  end

  test "should get create" do
    get api_items_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_items_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_items_update_url
    assert_response :success
  end

  test "should get index" do
    get api_items_index_url
    assert_response :success
  end

  test "should get show" do
    get api_items_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_items_destroy_url
    assert_response :success
  end

end
