using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Functions
{
    public class VaccineDAL : IvaccineDAL
    {
        CoronaProjectContext db;
        public VaccineDAL(CoronaProjectContext _db)
        {
            db = _db;
        }
        public int AddVaccine(Vaccine vaccine)
        {
            Member m = db.Members.FirstOrDefault(m => m.MemberId == vaccine.VaccineMemberId);
            if (m.MemberCountOfVaccines >= 4)
                return 0;
            m.MemberCountOfVaccines++;
            db.Vaccines.Add(vaccine);
            db.VaccineTypes.FirstOrDefault(x => x.VaccineTypeId == vaccine.VaccineVaccineTypeId).VaccineTypeNumOfVaccinated++;
            db.SaveChanges();
            return db.Vaccines.FirstOrDefault(v =>v.VaccineMemberId==vaccine.VaccineMemberId&&v.VaccineDate.Equals(vaccine.VaccineDate)).VaccineId;
        }

        public bool DeleteVaccine(int id)
        {
            Vaccine vaccine = db.Vaccines.FirstOrDefault(v => v.VaccineId == id);
            Member m = db.Members.FirstOrDefault(m => m.MemberId == vaccine.VaccineMemberId);
            if (vaccine == null)
                return false;
            m.MemberCountOfVaccines--;
            db.Vaccines.Remove(db.Vaccines.FirstOrDefault(v => v.VaccineId==id));
            db.VaccineTypes.FirstOrDefault(x => x.VaccineTypeId == vaccine.VaccineVaccineTypeId).VaccineTypeNumOfVaccinated--;
            db.SaveChanges();
            return true;
        }

        public List<Vaccine> GetAllVaccines()
        {
            return db.Vaccines.ToList();
        }

        public Vaccine GetVaccine(int id)
        {
            return db.Vaccines.FirstOrDefault(v => v.VaccineId==id);
        }

        public List<Vaccine> GetAllVaccinesToMember(string id)
        {
            return db.Vaccines.Where(x=>x.VaccineMemberId == id).ToList();
        }

        public bool UpdateVaccine(Vaccine vaccine)
        {
                Vaccine v = GetVaccine(vaccine.VaccineId);
                if (v == null)
                    return false;
                v.VaccineDate = vaccine.VaccineDate;
            if (v.VaccineVaccineTypeId != vaccine.VaccineVaccineTypeId)
            {
                db.VaccineTypes.FirstOrDefault(x => x.VaccineTypeId == v.VaccineVaccineTypeId).VaccineTypeNumOfVaccinated--;
                v.VaccineVaccineTypeId = vaccine.VaccineVaccineTypeId;
                db.VaccineTypes.FirstOrDefault(x => x.VaccineTypeId == vaccine.VaccineVaccineTypeId).VaccineTypeNumOfVaccinated++;
            }
            db.SaveChanges();
                return true;
        }
    }
}
