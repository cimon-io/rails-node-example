require 'rails_helper'

RSpec.describe "articles/edit", type: :view do
  before(:each) do
    @article = assign(:article, Article.create!(
      :title => "MyString",
      :body => "MyText",
      :author => "MyString",
      :views_count => 1
    ))
  end

  it "renders the edit article form" do
    render

    assert_select "form[action=?][method=?]", article_path(@article), "post" do

      assert_select "input#article_title[name=?]", "article[title]"

      assert_select "textarea#article_body[name=?]", "article[body]"

      assert_select "input#article_author[name=?]", "article[author]"

      assert_select "input#article_views_count[name=?]", "article[views_count]"
    end
  end
end
