﻿using BLL.Interfaces;
using DAL.Models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccineController : ControllerBase
    {
        IvaccineBLL v;
        public VaccineController(IvaccineBLL _v)
        {
            v = _v;
        }
        //GetAll- Vaccine
        [HttpGet("GetAllVaccines")]
        public ActionResult<List<Vaccine>> GetAllVaccines()
        {
            return Ok(v.GetAllVaccinesBLL());
        }
        //GetAll-to member-Vaccine

        [HttpGet("GetAllVaccinesToMember/{id}")]
        public ActionResult<List<Vaccine>> GetAllVaccinesToMember(string id)
        {
            return Ok(v.GetAllVaccinesToMemberBLL(id));
        }
        //GetById-Vaccine
        [HttpGet("GetVaccineById/{id}")]
        public ActionResult<Vaccine> GetVaccineById(int id)
        {
            return Ok(v.GetVaccineBLL(id));
        }
        //Add-Vaccine
        [HttpPost("AddVaccine")]
        public ActionResult<bool> AddVaccine([FromBody] VaccineDTO vaccine)
        {

            return Ok(v.AddVaccineBLL(vaccine));
        }
        //Update-Vaccine
        [HttpPut("UpdateVaccine")]
        public ActionResult<bool> UpdateVaccine([FromBody] VaccineDTO vaccine)
        {
            return Ok(v.UpdateVaccineBLL(vaccine));
        }
        //Delete-Vaccine
        [HttpDelete("DeleteVaccine/{id}")]
        public ActionResult<bool> DeleteVaccine(int id)
        {
            return Ok(v.DeleteVaccineBLL(id));
        }
    }
}
