json.results do
  json.items @results[:items]
  json.collections @results[:collections]
  json.users @results[:users]
end
