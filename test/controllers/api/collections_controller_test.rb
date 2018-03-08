require 'test_helper'

class Api::CollectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_collections_new_url
    assert_response :success
  end

  test "should get create" do
    get api_collections_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_collections_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_collections_update_url
    assert_response :success
  end

  test "should get index" do
    get api_collections_index_url
    assert_response :success
  end

  test "should get show" do
    get api_collections_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_collections_destroy_url
    assert_response :success
  end

end
