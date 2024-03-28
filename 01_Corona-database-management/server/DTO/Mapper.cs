using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL.Models;

namespace DTO
{
    public class Mapper:Profile
    {
        private  string MapMemberCityName(Member src)
        {
            Console.WriteLine($"MemberCity value: {src.MemberCity}");
            return src.MemberCity.CityName != null ? src.MemberCity.CityName : "Unknown";
        }
        public Mapper()
        {
            CreateMap<City, CityDTO>();
            CreateMap<CityDTO, City>();
            CreateMap<CoronaInfection, CoronaInfectionDTO>();
            CreateMap<CoronaInfectionDTO, CoronaInfection>();
            CreateMap<Member, MemberDTO>();
            CreateMap<MemberDTO, Member>();
            CreateMap<Vaccine, VaccineDTO>();
            CreateMap<VaccineDTO, Vaccine>();
            CreateMap<VaccineType, VaccineTypeDTO>();
            CreateMap<VaccineTypeDTO, VaccineType>();
        }
    }
}
