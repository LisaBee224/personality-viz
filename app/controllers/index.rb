get '/' do
  erb :'index'
end

get '/evaluate' do
  if request.xhr?
    binding.pry
    @type = TypeData.parse_data(params.keys.first)
    erb :'data/_show', layout: false
  else
    erb :'data/show'
  end
end
