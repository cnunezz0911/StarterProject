using MovieArtArena.Models.Domain;
using MovieArtArena.Models.Request;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace MoviePosterArena.Services
{
    public class PosterService
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Insert(PosterAddRequest model)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Poster_Insert";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@Id";
                    param.SqlDbType = System.Data.SqlDbType.Int;
                    param.Direction = System.Data.ParameterDirection.Output;

                    cmd.Parameters.Add(param);
                    cmd.Parameters.AddWithValue("@Title", model.Title);
                    cmd.Parameters.AddWithValue("@Description", model.Description);
                    cmd.Parameters.AddWithValue("@Type", model.Type);
                    cmd.Parameters.AddWithValue("@Price", model.Price);
                    cmd.Parameters.AddWithValue("@ModifiedBy", model.ModifiedBy);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    //setting an explicit cast 
                    result = (int)cmd.Parameters["@Id"].Value;
                    conn.Close();
                }
            }
            return result;
        }

        public List<Poster> GetAll()
        {
            List<Poster> result = new List<Poster>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string cmdText = "Poster_SelectAll";
                using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    conn.Open();
                    SqlDataReader reader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
                    while (reader.Read())
                    {
                        Poster model = new Poster();
                        int index = 0;
                        model.Id = reader.GetInt32(index++);
                        model.Title = reader.GetString(index++);
                        model.Description = reader.GetString(index++);
                        model.Type = reader.GetString(index++);
                        model.Price = reader.GetDecimal(index++);
                        model.CreatedDate = reader.GetDateTime(index++);
                        model.ModifiedDate = reader.GetDateTime(index++);
                        model.ModifiedBy = reader.GetString(index++);
                        result.Add(model);
                    }
                    conn.Close();
                }
            }

            return result;
        }
    }
}
